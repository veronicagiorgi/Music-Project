package finalproject.finalproject.controller;

import finalproject.finalproject.entity.Manufacturer;
import finalproject.finalproject.entity.Product;
import finalproject.finalproject.repository.ManufacturerRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/manufacturers")
public class ManufacturerController {
    @Autowired
    private ManufacturerRepository manufacturerRepository;

// GET ALL

    @GetMapping
    public List<Manufacturer> getAllManufacturer(){
        return manufacturerRepository.findAll();
    }

// GET BY ID

    @GetMapping("/{id}")
    public Manufacturer getManufacturerById(@PathVariable Integer id){
        Optional <Manufacturer> result = manufacturerRepository.findById(id);
        if(result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // GET PRODUCTS BY MANUFACTURER ID

    @GetMapping("{id}/products")
    public List<Product> getAllProductsByManufacturerId(@PathVariable Integer id){
        Optional<Manufacturer> result = manufacturerRepository.findById(id);
        if(result.isPresent()){
             return result.get().getProducts();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

// POST
    @PostMapping
    public Manufacturer createManufacturer(@Valid @RequestBody Manufacturer manufacturer){
        Optional<Manufacturer> result = manufacturerRepository.findById(manufacturer.getId());
        if(result.isEmpty()){
            return manufacturerRepository.save(manufacturer);
        } else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

// PUT
    @PutMapping("/{id}")
    public Manufacturer updateManufacturer(@Valid @PathVariable Integer id, @RequestBody Manufacturer manufacturer){
        Optional<Manufacturer> result = manufacturerRepository.findById(id);
        if(result.isPresent()){
            manufacturer.setId(id);
            return manufacturerRepository.save(manufacturer);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
    // DELETE

    @DeleteMapping("/{id}")
    public void deleteManufacturerById(@PathVariable Integer id){
        if(manufacturerRepository.existsById(id)){
            manufacturerRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
