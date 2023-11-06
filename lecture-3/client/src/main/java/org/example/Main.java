package org.example;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws InterruptedException, URISyntaxException, IOException {
        var httpClient = HttpClient.newHttpClient();


        var request = HttpRequest
                .newBuilder()
                .uri(new URI("http://localhost:8081/add?first=cartof&second=56"))
                .header("secret", "secret")
                .GET()
                .build();

        var subtractRequest = HttpRequest.newBuilder()
                .uri(new URI("http://localhost:8081/subtract?first=11&second=5"))
                .GET()
                .build();
        var subtractResponse = httpClient.send(subtractRequest, HttpResponse.BodyHandlers.ofString());

        if (subtractResponse.statusCode() == 200) {
            System.out.println("Substract: " + subtractResponse.body());
        } else {
            System.out.println("Fail: " + subtractResponse.body());
        }

        var multiplyRequest = HttpRequest.newBuilder()
                .uri(new URI("http://localhost:8081/multiply?first=23&second=12"))
                .GET()
                .build();
        var multiplyResponse = httpClient.send(multiplyRequest, HttpResponse.BodyHandlers.ofString());

        if (multiplyResponse.statusCode() == 200) {
            System.out.println("multiply: " + multiplyResponse.body());
        } else {
            System.out.println("Fail: " + multiplyResponse.body());
        }


        var divideRequest = HttpRequest.newBuilder()
                .uri(new URI("http://localhost:8081/divide?first=10&second=5"))
                .GET()
                .build();

        var divideResponse = httpClient.send(divideRequest, HttpResponse.BodyHandlers.ofString());

        if (divideResponse.statusCode() == 200) {
            System.out.println( "divide: "+divideResponse.body());
        } else {
            System.out.println("Fail: " + divideResponse.body());
        }



        var response = httpClient
                .send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());

    }


}
