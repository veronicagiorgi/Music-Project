package finalproject.finalproject.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

public class ArtistInstrumentDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String artistFirstName;
    @NotBlank
    private String artistLastName;
    private String artistImageUrl;
    @NotBlank
    private List<Instrument> instrumentCategory;

    public ArtistInstrumentDTO() {
    }

    public ArtistInstrumentDTO(String artistFirstName, String artistLastName, List<Instrument> instrumentCategory, String artistImageUrl) {
        this.artistFirstName = artistFirstName;
        this.artistLastName = artistLastName;
        this.instrumentCategory = instrumentCategory;
        this.artistImageUrl = artistImageUrl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getArtistFirstName() {
        return artistFirstName;
    }

    public void setArtistFirstName(String artistFirstName) {
        this.artistFirstName = artistFirstName;
    }

    public String getArtistLastName() {
        return artistLastName;
    }

    public void setArtistLastName(String artistLastName) {
        this.artistLastName = artistLastName;
    }

    public List<Instrument> getInstrumentCategory() {
        return instrumentCategory;
    }

    public void setInstrumentCategory(List<Instrument> instrumentCategory) {
        this.instrumentCategory = instrumentCategory;
    }

    public String getArtistImageUrl() {
        return artistImageUrl;
    }

    public void setArtistImageUrl(String artistImageUrl) {
        this.artistImageUrl = artistImageUrl;
    }

    @Override
    public String toString() {
        return "ArtistInstrumentDTO{" +
                "id=" + id +
                ", artistFirstName='" + artistFirstName + '\'' +
                ", artistLastName='" + artistLastName + '\'' +
                ", artistImageUrl='" + artistImageUrl + '\'' +
                ", instrumentCategory=" + instrumentCategory +
                '}';
    }
}
