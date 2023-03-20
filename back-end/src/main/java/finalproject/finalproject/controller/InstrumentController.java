package finalproject.finalproject.controller;

import finalproject.finalproject.entity.Artist;
import finalproject.finalproject.entity.Instrument;
import finalproject.finalproject.entity.Manufacturer;
import finalproject.finalproject.entity.Product;
import finalproject.finalproject.repository.ArtistRepository;
import finalproject.finalproject.repository.InstrumentRepository;
import finalproject.finalproject.repository.ManufacturerRepository;
import finalproject.finalproject.repository.ProductRepository;
import jakarta.validation.Valid;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;


@CrossOrigin
@RestController
@RequestMapping("/api/instruments")
public class InstrumentController {
    @Autowired
    private InstrumentRepository instrumentRepository;

    @Autowired
    private ArtistRepository artistRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ManufacturerRepository manufacturerRepository;

    // GET ALL
    @GetMapping
    public List<Instrument> getAllInstruments(@RequestParam(name="search", required = false) String s){
        if(Strings.isBlank(s)){
            return instrumentRepository.findAll();
        } else {
            return instrumentRepository.findByNameContainingIgnoreCaseOrTypeContainingIgnoreCase(s,s);
        }
    }
    @GetMapping("/{id}")
    public Instrument getInstrumentsById(@PathVariable Integer id) {
        Optional<Instrument> result = instrumentRepository.findById(id);
        if (result.isPresent()) {
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
// POST PER AGGIUNGERE UNO STRUMENTO
    @PostMapping
    public Instrument createInstrument(@Valid @RequestBody Instrument instrument){
        Optional<Instrument> result = instrumentRepository.findById(instrument.getId());
        if(result.isEmpty()){
            return instrumentRepository.save(instrument);
        } else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }
// PUT PER MODIFICARE UNO STRUMENTO
    @PutMapping("/{id}")
    public Instrument updateInstrument(@PathVariable Integer id,@ Valid @RequestBody Instrument instrument){
        Optional<Instrument> result = instrumentRepository.findById(id);
        if(result.isPresent()){
            instrument.setId(id);
            return instrumentRepository.save(instrument);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
// DELETE
   /* @DeleteMapping("/{id}")
    public void deleteIntrumentById(@PathVariable Integer id){
        if(instrumentRepository.existsById(id)){
            instrumentRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }*/

    //GET PRODUCT BY INSTRUMENT ID
    @GetMapping("/{id}/products")
    public List <Product> getProductByInstrumentId(@PathVariable Integer id) {
        Optional<Instrument> result = instrumentRepository.findById(id);
        if (result.isPresent()) {
            return result.get().getProducts();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

// POST PER AGGIUNGERE UN PRODOTTO AD UNO STRUMENTO ESISTENTE PRESO PER ID --- ONETOMANY

    @PostMapping("/{id}/create/{manuId}")
    public Product createProduct(@Valid @RequestBody Product product, @PathVariable Integer id, @PathVariable Integer manuId){
        Optional<Instrument> result = instrumentRepository.findById(id);
        Optional<Manufacturer> resultManufacturer = manufacturerRepository.findById(manuId);
        if(result.isPresent() && resultManufacturer.isPresent()){
            Product newProduct = new Product();
            newProduct.setName(product.getName());
            newProduct.setDescription(product.getDescription());
            newProduct.setRate(product.getRate());
            newProduct.setPrice(product.getPrice());
            newProduct.setImageUrl(product.getImageUrl());
            newProduct.setUrlVideo(product.getUrlVideo());
            newProduct.setBelongingInstrument(result.get());
            newProduct.setBelongingManufacturer(resultManufacturer.get());

            return productRepository.save(newProduct);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

// PUT PER MODIFICARE UN PRODOTTO ASSOCIATO AD UNO STRUMENTO --- ONETOMANY

    @PutMapping("/{id}/update/{productId}")
    public Product updateProduct(@Valid @RequestBody Product product, @PathVariable Integer id, @PathVariable Integer productId){
        Optional<Instrument> result = instrumentRepository.findById(id);
        if(result.isPresent()){
            Optional<Product> resultProduct = productRepository.findById(productId);
            if(resultProduct.isPresent()){
                product.setId(productId);
                product.setBelongingInstrument(result.get());
                product.setBelongingManufacturer(resultProduct.get().getBelongingManufacturer());
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return productRepository.save(product);
    }
// DELETE DI UN PRODOTTO APPARTENENTE AD UNO STRUMENTO
    @DeleteMapping("/{id}/delete/{productId}")
    public List<Product> deleteProductFromInstrument(@PathVariable Integer id, @PathVariable Integer productId){
        Optional<Instrument> result = instrumentRepository.findById(id);
        if(result.isPresent()){
            Optional<Product> resultProduct = productRepository.findById(productId);
            if(resultProduct.isPresent()){
                productRepository.deleteById(productId);
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return result.get().getProducts();
    }

    ///////////////// INIZIO GESTIONE RELAZIONI ARTISTI //////////////////

// DELETE CHE RIMUOVE L'ASSOCIAZIONE TRA UNO STRUMENTO E UN ARTISTA PRESO PER ID --- MANYTOMANY

    @DeleteMapping("/{id}/artist/{artistId}")
        public Set<Artist> removeArtistFromInstrument(@PathVariable ("id") Integer instrumentId,
                                                      @PathVariable("artistId") Integer artistId) {
        Optional<Artist> resultArtist = artistRepository.findById(artistId);
        Optional<Instrument> resultInstrument = instrumentRepository.findById(instrumentId);
        if (resultInstrument.isPresent() && resultArtist.isPresent()) {

            Artist artist = resultArtist.get();
            Instrument instrument = resultInstrument.get();

            artist.getInstruments().remove(instrument);
            instrument.getArtists().remove(artist);
            instrumentRepository.save(instrument);
            return instrument.getArtists();

        } else {
            String message = "";
            if (resultInstrument.isEmpty()) {
                message += "instrument with id " + instrumentId + " not found\n";
            }
            if (resultArtist.isEmpty()) {
                message += "artist with id " + artistId + " not found\n";
            }
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, message);
        }
    }

// DELETE CHE RIMUOVE FISICAMENTE UNO STRUMENTO DA DATABSE - RIMUOVENDO ASSOCIAZIONE ARTIST---- MANYTOMANY!
@DeleteMapping("/{id}")
public void removeInstrument(@PathVariable Integer id){
    Optional<Instrument> resultInstrument = instrumentRepository.findById(id);
    if(resultInstrument.isPresent()){

        Instrument instrument = resultInstrument.get();
        Set <Artist> associatedArtist = instrument.getArtists();

        for(Artist item : associatedArtist){
            item.getInstruments().remove(instrument);
        }
        instrument.setArtists(null);
        instrumentRepository.deleteById(id);
    } else {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
}

// POST CHE AGGIUNGE UN ARTISTA ASSOCIATO AD UNO STRUMENTO PRESO PER ID

    @PostMapping("{id}/artists")
    public List<Artist> addArtistToInstrument(@Valid @RequestBody Artist artist, @PathVariable Integer id){
      Optional<Instrument> result = instrumentRepository.findById(id);
      if(result.isPresent()){
        Instrument instrument = result.get();
        Optional<Artist> resultArtist = artistRepository.findById(artist.getId());
        Artist artistToAdd = null;
          if(resultArtist.isPresent() && resultArtist.get().equals(artist)){
              artistToAdd = resultArtist.get();
          } else{
              Artist newArtist = new Artist(artist);
              artistToAdd = artistRepository.save(newArtist);
          }
            //aggiungo l'artista alla relazione
          if(instrument.getArtists() == null){
              instrument.setArtists((new HashSet<Artist>()));
          }
          if(artist.getInstruments()==null){
              artist.setInstruments(new ArrayList<Instrument>());
          }
          instrument.getArtists().add(artistToAdd);
          artist.getInstruments().add(instrument);
          instrumentRepository.save(instrument);
          return artistRepository.findAll();
      } else {
          throw new ResponseStatusException(HttpStatus.NOT_FOUND);
      }
    }

    @PutMapping("{id}/associate/{artistId}")
    public void associateInstrument(@PathVariable Integer id, @PathVariable Integer artistId){
        Optional<Artist> resultArtist = artistRepository.findById(artistId);
        Optional<Instrument> resultInstrument = instrumentRepository.findById(id);
        if(resultArtist.isPresent() && resultInstrument.isPresent()){
            resultInstrument.get().getArtists().add(resultArtist.get());
            resultArtist.get().getInstruments().add(resultInstrument.get());
            instrumentRepository.save(resultInstrument.get());
            artistRepository.save(resultArtist.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}


