package finalproject.finalproject.repository;

import finalproject.finalproject.entity.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository extends JpaRepository <Manufacturer, Integer> {
}
