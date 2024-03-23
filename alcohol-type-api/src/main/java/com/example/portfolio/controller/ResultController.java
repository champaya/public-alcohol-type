package com.example.portfolio.controller;

import com.example.portfolio.DTO.ResultDTO;
import com.example.portfolio.Form.ResultForm;
import com.example.portfolio.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class ResultController {

    private final ResultService resultService;

    @Autowired
    public ResultController(ResultService resultService){
        this.resultService = resultService;
    }
    @RequestMapping("/getResult")
    public String getResult(@RequestBody ResultForm resultForm){
        return resultService.getResult(resultForm);
    }

    @RequestMapping("/getAllType")
    public List<ResultDTO> getALLType(){
        return resultService.getALLType();
    }


}
