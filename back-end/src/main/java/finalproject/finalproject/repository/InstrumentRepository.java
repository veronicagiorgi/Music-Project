package finalproject.finalproject.repository;

import finalproject.finalproject.entity.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstrumentRepository extends JpaRepository<Instrument,Integer> {
    List<Instrument> findByNameContainingIgnoreCaseOrTypeContainingIgnoreCase(String name, String type);

}
