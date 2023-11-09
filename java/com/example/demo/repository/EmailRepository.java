package com.example.demo.repository;

import com.example.demo.model.MessageDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface EmailRepository extends MongoRepository<MessageDetails, String> {

}
