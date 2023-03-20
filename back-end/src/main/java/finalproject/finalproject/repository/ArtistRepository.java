package finalproject.finalproject.repository;

import finalproject.finalproject.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository <Artist, Integer> {
}
