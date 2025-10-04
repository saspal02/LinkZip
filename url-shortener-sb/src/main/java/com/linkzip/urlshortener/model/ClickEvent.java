package com.linkzip.urlshortener.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class ClickEvent {
    @Id
    @GeneratedValue
    private Long id;
    private LocalDateTime clickDate;

    @ManyToOne
    @JoinColumn(name= "url_mapping_id")
    private UrlMapping urlMapping;


}
