package com.example.demo.contoller;

import com.example.demo.model.MessageDetails;
import com.example.demo.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.internet.MimeMessage;
import java.io.File;
import java.io.IOException;

@CrossOrigin(origins= "http://localhost:4200")
@RestController()
@RequestMapping("/api")
public class MessagesController {
    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private EmailRepository emailRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/sendEmail")
    public ResponseEntity<String> sendEmail(
            @RequestBody MessageDetails messageDetails
            @RequestParam("attachmentFile") MultipartFile attachmentFile) {
    String attachmentPath = "/Users/anilkumarsunkoju/Library/Mobile Documents/com~apple~TextEdit/Documents";
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
            messageHelper.setTo(messageDetails.getRecipientEmail());
            messageHelper.setSubject(messageDetails.getAttachmentFileName());
            messageHelper.setFrom(messageDetails.getFromEmail());
            messageHelper.setText(messageDetails.getAttachmentFile(), true);

           /* if (attachmentData != null && attachmentName != null) {
                Resource attachment = new ByteArrayResource(attachmentData);
                messageHelper.addAttachment(attachmentName, attachment);
            }
            javaMailSender.send(mimeMessage);*/

            emailRepository.insert(messageDetails);
            // Attach the file
            FileSystemResource file = new FileSystemResource(new File(attachmentPath));
            messageHelper.addAttachment("AttachmentName", file);

            javaMailSender.send(messageHelper.getMimeMessage());

            return ResponseEntity.ok("Email sent successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Email sending failed: " + e.getMessage());
        }
    }
}
