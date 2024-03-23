package com.example.portfolio.service;

import com.example.portfolio.DTO.ResultDTO;
import com.example.portfolio.Entity.ResultEntity;
import com.example.portfolio.Form.ResultForm;
import com.example.portfolio.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ResultService {


    private final ResultRepository resultRepository;
    @Autowired
    public ResultService(ResultRepository resultRepository){ this.resultRepository = resultRepository;}

    public String getResult(ResultForm resultForm){
        List<ResultForm.QuestionSets> firstElement = filterFromInt(resultForm, "1");
        List<ResultForm.QuestionSets> secondElement = filterFromInt(resultForm, "2");
        List<ResultForm.QuestionSets> thirdElement = filterFromInt(resultForm, "3");
        List<ResultForm.QuestionSets> fourthElement = filterFromInt(resultForm, "4");
        int firstSum = sumValue(firstElement);
        int secondSum = sumValue(secondElement);
        int thirdSum = sumValue(thirdElement);
        int fourthSum = sumValue(fourthElement);
        String firstAlphabet = firstSum > 0? "S":"M";
        String secondAlphabet = secondSum > 0? "A":"R";
        String thirdAlphabet = thirdSum > 0? "K":"G";
        String fourthAlphabet = fourthSum > 0? "E":"N";
        String typeInitial = firstAlphabet + secondAlphabet + thirdAlphabet + fourthAlphabet;

        Optional<ResultEntity> result = resultRepository.findById(typeInitial);

        //  DBからデータを取得できなかった場合に例外を投げる
        return result.map(ResultEntity::getTypeInitial).orElseThrow();
    }

    public List<ResultDTO> getALLType(){
      List<ResultEntity> allType = resultRepository.findAllByOrderByTypeInitial();
      List<ResultDTO> returnAllType = new ArrayList<ResultDTO>();;
        for (ResultEntity resultEntity : allType) {
            returnAllType.add(convertToDTO(resultEntity));
        }
        return returnAllType;
    }

    private static List<ResultForm.QuestionSets> filterFromInt(ResultForm result , String endInt){
        return result.getQuestionSets().stream().filter(item -> item.getId().endsWith(endInt)).toList();
    }

    private static int sumValue(List<ResultForm.QuestionSets> element){
        int initialValue = 0;
        for (ResultForm.QuestionSets questionSets : element) {
            initialValue += Integer.parseInt(questionSets.getValue());
        }

        return initialValue;
    }

    private ResultDTO convertToDTO(ResultEntity resultEntity){
        ResultDTO resultDTO = new ResultDTO();
        resultDTO.setTypeInitial(resultEntity.getTypeInitial());
        resultDTO.setTypeName(resultEntity.getTypeName());
        resultDTO.setIntroduction(resultEntity.getIntroduction());
        resultDTO.setTitle1(resultEntity.getTitle1());
        resultDTO.setDescription1(resultEntity.getDescription1());
        resultDTO.setTitle2(resultEntity.getTitle2());
        resultDTO.setDescription2(resultEntity.getDescription2());
        resultDTO.setTitle3(resultEntity.getTitle3());
        resultDTO.setDescription3(resultEntity.getDescription3());
        return resultDTO;
    }
}
