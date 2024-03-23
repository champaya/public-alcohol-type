package com.example.portfolio.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "type_master")
@Data
public class ResultEntity {
    @Id
    @Column(name = "TYPE_INITIAL")
    private String typeInitial;
    @Column(name = "TYPE_NAME")
    private String typeName;
    @Column(name = "INTRODUCTION")
    private String introduction;
    @Column(name = "TITLE_1")
    private String title1;
    @Column(name = "DESCRIPTION_1")
    private String description1;
    @Column(name = "TITLE_2")
    private String title2;
    @Column(name = "DESCRIPTION_2")
    private String description2;
    @Column(name = "TITLE_3")
    private String title3;
    @Column(name = "DESCRIPTION_3")
    private String description3;
}
