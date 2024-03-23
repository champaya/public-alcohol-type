package com.example.portfolio.DTO;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class ResultDTO {
    private String typeInitial;
    private String typeName;
    private String introduction;
    private String title1;
    private String description1;
    private String title2;
    private String description2;
    private String title3;
    private String description3;
}
