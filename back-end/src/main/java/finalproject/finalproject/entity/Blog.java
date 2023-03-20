package finalproject.finalproject.entity;

import jakarta.persistence.*;

import jakarta.validation.constraints.NotBlank;


@Entity
@Table (name = "blog")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String title;
    @NotBlank
    private String imageUrl;
    @NotBlank
    private String article;

    public Blog() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }


    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", article='" + article + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Blog blog = (Blog) o;

        if (getId() != blog.getId()) return false;
        if (getTitle() != null ? !getTitle().equals(blog.getTitle()) : blog.getTitle() != null) return false;
        if (getImageUrl() != null ? !getImageUrl().equals(blog.getImageUrl()) : blog.getImageUrl() != null)
            return false;
        return getArticle() != null ? getArticle().equals(blog.getArticle()) : blog.getArticle() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getTitle() != null ? getTitle().hashCode() : 0);
        result = 31 * result + (getImageUrl() != null ? getImageUrl().hashCode() : 0);
        result = 31 * result + (getArticle() != null ? getArticle().hashCode() : 0);
        return result;
    }
}
