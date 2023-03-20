package finalproject.finalproject.controller;

import finalproject.finalproject.entity.Artist;
import finalproject.finalproject.entity.ArtistInstrumentDTO;
import finalproject.finalproject.entity.Instrument;
import finalproject.finalproject.repository.ArtistRepository;
import finalproject.finalproject.repository.InstrumentRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/api/artists")
public class ArtistController {
    @Autowired
    private ArtistRepository artistRepository;
    @Autowired
    private InstrumentRepository instrumentRepository;
//GET ALL
    @GetMapping
    public List<Artist> getAllArtists(){
        return artistRepository.findAll();
    }
// GET BY ID
    @GetMapping("/{id}")
    public Artist getArtistById(@PathVariable Integer id){
        Optional<Artist> result = artistRepository.findById(id);
        if(result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
// POST

    @PostMapping
    public Artist createArtist(@Valid @RequestBody Artist artist){
        Optional<Artist> result = artistRepository.findById(artist.getId());
        if(result.isEmpty()){
            return artistRepository.save(artist);
        } else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }
// PUT
    @PutMapping("/{id}")
    public Artist updateArtist( @PathVariable Integer id,@Valid@RequestBody Artist artist){
        Optional<Artist> result = artistRepository.findById(id);
        if(result.isPresent()){
            artist.setId(id);
            return artistRepository.save(artist);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
// DELETE

    // RIMOZIONE ARTISTA DA DB!!!!
    @DeleteMapping("/{id}")
    public void removeArtist(@PathVariable Integer id){
        Optional<Artist> resultArtist = artistRepository.findById(id);
        if(resultArtist.isPresent()){

            Artist artist = resultArtist.get();
            List<Instrument> associatedInstruments = artist.getInstruments();

            for(Instrument item : associatedInstruments){
                item.getArtists().remove(artist);
            }
            artist.setInstruments(null);
            artistRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

//DTO pattern
    @GetMapping("{id}/dto")
    public ArtistInstrumentDTO getInstrumentsOfArtist(@PathVariable Integer id){
        Optional<Artist> result = artistRepository.findById(id);
        if(result.isPresent()){
            Artist artist = result.get();
            ArtistInstrumentDTO dto = new ArtistInstrumentDTO();
            dto.setArtistFirstName(artist.getFirstName());
            dto.setArtistLastName(artist.getLastName());
            dto.setInstrumentCategory(artist.getInstruments());
            dto.setArtistImageUrl(artist.getImageUrl());
            return dto;

        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
