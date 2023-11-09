package com.example.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "email_detail")
public class MessageDetails {
    @Id
    private String id;
    private String fromEmail;
    private String recipientEmail;
    private String attachmentFileName;
    private String attachmentFile;
    private String uploadUser;
    private String uploadDate;


}
