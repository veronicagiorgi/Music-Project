package finalproject.finalproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;


@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank(message = "name must not be blank!")
    private String name;
    @NotBlank(message = "You need a description!")
    private String description;
    private String imageUrl;
    private double price;
    private int rate;
    private String urlVideo;
    @ManyToOne
    @JoinColumn(name = "instrument_id")
    @JsonIgnore
    private Instrument belongingInstrument;
    @ManyToOne
    @JoinColumn(name="manufacturer_id")
    @JsonIgnore
    private Manufacturer belongingManufacturer;

//Costruttori
    public Product() {
    }

//Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getUrlVideo() {
        return urlVideo;
    }

    public void setUrlVideo(String urlVideo) {
        this.urlVideo = urlVideo;
    }

    public Instrument getBelongingInstrument() {
        return belongingInstrument;
    }

    public void setBelongingInstrument(Instrument belongingInstrument) {
        this.belongingInstrument = belongingInstrument;
    }

    public Manufacturer getBelongingManufacturer() {
        return belongingManufacturer;
    }

    public void setBelongingManufacturer(Manufacturer belongingManufacturer) {
        this.belongingManufacturer = belongingManufacturer;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", price=" + price +
                ", rate=" + rate +
                ", urlVideo='" + urlVideo + '\'' +
                ", belongingInstrument=" + belongingInstrument +
                ", belongingManufacturer=" + belongingManufacturer +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Product product = (Product) o;

        if (getId() != product.getId()) return false;
        if (Double.compare(product.getPrice(), getPrice()) != 0) return false;
        if (getRate() != product.getRate()) return false;
        if (getName() != null ? !getName().equals(product.getName()) : product.getName() != null) return false;
        if (getDescription() != null ? !getDescription().equals(product.getDescription()) : product.getDescription() != null)
            return false;
        if (getImageUrl() != null ? !getImageUrl().equals(product.getImageUrl()) : product.getImageUrl() != null)
            return false;
        if (getUrlVideo() != null ? !getUrlVideo().equals(product.getUrlVideo()) : product.getUrlVideo() != null)
            return false;
        if (getBelongingInstrument() != null ? !getBelongingInstrument().equals(product.getBelongingInstrument()) : product.getBelongingInstrument() != null)
            return false;
        return getBelongingManufacturer() != null ? getBelongingManufacturer().equals(product.getBelongingManufacturer()) : product.getBelongingManufacturer() == null;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = getId();
        result = 31 * result + (getName() != null ? getName().hashCode() : 0);
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        result = 31 * result + (getImageUrl() != null ? getImageUrl().hashCode() : 0);
        temp = Double.doubleToLongBits(getPrice());
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + getRate();
        result = 31 * result + (getUrlVideo() != null ? getUrlVideo().hashCode() : 0);
        result = 31 * result + (getBelongingInstrument() != null ? getBelongingInstrument().hashCode() : 0);
        result = 31 * result + (getBelongingManufacturer() != null ? getBelongingManufacturer().hashCode() : 0);
        return result;
    }
}
