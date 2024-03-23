package com.example.portfolio.Form;

import lombok.Data;

import java.util.List;

@Data
public class ResultForm {
    private List<QuestionSets> questionSets;

    ResultForm(){}
    @Data
    public static class QuestionSets{
        private String id;
        private String value;
    }

}


