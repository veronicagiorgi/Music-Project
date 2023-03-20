package finalproject.finalproject.controller;

import finalproject.finalproject.entity.Instrument;
import finalproject.finalproject.entity.Manufacturer;
import finalproject.finalproject.entity.Product;
import finalproject.finalproject.repository.InstrumentRepository;
import finalproject.finalproject.repository.ManufacturerRepository;
import finalproject.finalproject.repository.ProductRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ManufacturerRepository manufacturerRepository;
    @Autowired
    private InstrumentRepository instrumentRepository;

// GET ALL

    @GetMapping
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

//GET BY ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Integer id){
        Optional<Product> result = productRepository.findById(id);
        if(result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
// POST
    @PostMapping
    public Product createProduct(@Valid @RequestBody Product product){
        Optional<Product> result = productRepository.findById(product.getId());
        if(result.isEmpty()){
            return productRepository.save(product);
        } else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }
// PUT
    @PutMapping("/{id}")
    public Product updateProduct(@Valid @PathVariable Integer id, @RequestBody Product product){
        Optional<Product> result = productRepository.findById(id);
        if(result.isPresent()){
            product.setId(id);
            return productRepository.save(product);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
// DELETE BY ID
    @DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable Integer id){
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

// AGGIUNGERE UN NUOVO PRODOTTO CON ASSOCIAZIONE A MANUFACTURER E INSTRUMENT

    @PostMapping("/{id}/add/{manuId}")
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
            newProduct.setBelongingInstrument(result.get());
            newProduct.setBelongingManufacturer(resultManufacturer.get());
            newProduct.setUrlVideo(product.getUrlVideo());

            return productRepository.save(newProduct);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
// MODIFICARE UN PRODOTTO MANTENENDO ASSOCIAZIONE CON MANUFACTURER E INSTRUMENT

    @PutMapping("/{id}/modify")
    public Product updateProduct(@Valid @RequestBody Product product, @PathVariable Integer id){
        Optional<Product> result = productRepository.findById(id);
        if(result.isPresent()){
            product.setId(id);
            product.setBelongingInstrument(result.get().getBelongingInstrument());
            product.setBelongingManufacturer(result.get().getBelongingManufacturer());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return productRepository.save(product);
    }


}
