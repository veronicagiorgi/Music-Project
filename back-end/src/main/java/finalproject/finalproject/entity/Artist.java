package finalproject.finalproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;


@Entity
@Table (name = "artists")
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank(message = "this field must not be blank!")
    private String firstName;
    @NotBlank(message = "this field must not be blank!")
    private String lastName;
    @NotBlank(message = "this field must not be blank!")
    private String country;
    private String imageUrl;
    private String coverImage;
    private String history;
    private String spotifyUrl;
    @ManyToMany(mappedBy = "artists")
    @JsonIgnore
    private List<Instrument> instruments = new ArrayList<>();

    //costruttori
    public Artist() {
    }

    public Artist(Artist newArtist) {
        this.firstName = newArtist.getFirstName();
        this.lastName = newArtist.getLastName();
        this.country = newArtist.getCountry();
        this.imageUrl=newArtist.getImageUrl();
    }

    //getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history;
    }

    public String getSpotifyUrl() {
        return spotifyUrl;
    }

    public void setSpotifyUrl(String spotifyUrl) {
        this.spotifyUrl = spotifyUrl;
    }

    public List<Instrument> getInstruments() {
        return instruments;
    }

    public void setInstruments(List<Instrument> instruments) {
        this.instruments = instruments;
    }

    @Override
    public String toString() {
        return "Artist{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", country='" + country + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", coverImage='" + coverImage + '\'' +
                ", history='" + history + '\'' +
                ", spotifyUrl='" + spotifyUrl + '\'' +
                ", instruments=" + instruments +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Artist artist = (Artist) o;

        if (getId() != artist.getId()) return false;
        if (getFirstName() != null ? !getFirstName().equals(artist.getFirstName()) : artist.getFirstName() != null)
            return false;
        if (getLastName() != null ? !getLastName().equals(artist.getLastName()) : artist.getLastName() != null)
            return false;
        if (getCountry() != null ? !getCountry().equals(artist.getCountry()) : artist.getCountry() != null)
            return false;
        if (getImageUrl() != null ? !getImageUrl().equals(artist.getImageUrl()) : artist.getImageUrl() != null)
            return false;
        if (getCoverImage() != null ? !getCoverImage().equals(artist.getCoverImage()) : artist.getCoverImage() != null)
            return false;
        if (getHistory() != null ? !getHistory().equals(artist.getHistory()) : artist.getHistory() != null)
            return false;
        return getSpotifyUrl() != null ? getSpotifyUrl().equals(artist.getSpotifyUrl()) : artist.getSpotifyUrl() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getFirstName() != null ? getFirstName().hashCode() : 0);
        result = 31 * result + (getLastName() != null ? getLastName().hashCode() : 0);
        result = 31 * result + (getCountry() != null ? getCountry().hashCode() : 0);
        result = 31 * result + (getImageUrl() != null ? getImageUrl().hashCode() : 0);
        result = 31 * result + (getCoverImage() != null ? getCoverImage().hashCode() : 0);
        result = 31 * result + (getHistory() != null ? getHistory().hashCode() : 0);
        result = 31 * result + (getSpotifyUrl() != null ? getSpotifyUrl().hashCode() : 0);
        return result;
    }
}
