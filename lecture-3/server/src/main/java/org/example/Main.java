package org.example;

import com.sun.net.httpserver.HttpExchange;


import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        var server = HttpServer.create(new InetSocketAddress(8081), 0);

        server.createContext("/add", exchange -> {
            var query = exchange.getRequestURI().getQuery();
            var params = query.split("&");
            int first = 0;
            int second = 0;
            for (String param : params) {
                String[] parts = param.split("=");
                if (parts.length == 2) {
                    if (parts[0].equals("first")) {
                        try {
                            first = Integer.parseInt(parts[1]);
                        } catch (NumberFormatException e) {
                            badRequest(exchange, "first nu este un numar");
                            return;
                        }
                    } else if (parts[0].equals("second")) {
                        try {
                            second = Integer.parseInt(parts[1]);
                        } catch (NumberFormatException e) {
                            badRequest(exchange, "second nu este un numar");
                            return;
                        }
                    }
                }
            }
            int result = first + second;
            ok(exchange, String.valueOf(result));
        });
        server.createContext("/subtract", exchange -> {
            var query = exchange.getRequestURI().getQuery();
            var params = query.split("&");
            int first = 0;
            int second = 0;
            for (String param : params) {
                String[] parts = param.split("=");
                if (parts.length == 2) {
                    if (parts[0].equals("first")) {
                        try {
                            first = Integer.parseInt(parts[1]);
                        } catch (NumberFormatException e) {
                            badRequest(exchange, "first nu este un numar");
                            return;
                        }
                    } else if (parts[0].equals("second")) {
                        try {
                            second = Integer.parseInt(parts[1]);
                        } catch (NumberFormatException e) {
                            badRequest(exchange, "second nu este un numar");
                            return;
                        }
                    }
                }
            }
            int result = first - second;
            ok(exchange, String.valueOf(result));
        });


        server.createContext("/multiply", exchange -> {
            var query = exchange.getRequestURI().getQuery();
            var params = query.split("&");
            int first = 0;
            int second = 0;
            for (String param : params) {
                String[] parts = param.split("=");
                if (parts.length == 2) {
                    if (parts[0].equals("first")) {
                        try {
                            first = Integer.parseInt(parts[1]);
                        } catch (NumberFormatException e) {
                            badRequest(exchange, "first nu este un numar");
                            return;
                        }
                    } else if (parts[0].equals("second")) {
                        try {
                            second = Integer.parseInt(parts[1]);
                        } catch (NumberFormatException e) {
                            badRequest(exchange, "second nu este un numar");
                            return;
                        }
                    }
                }
            }
            int result = first * second;
            ok(exchange, String.valueOf(result));
        });

        server.createContext("/divide", exchange -> {
            var query = exchange.getRequestURI().getQuery();
            var params = query.split("&");
            int first = 0;
            int second = 0;
            for (String param : params) {
                String[] parts = param.split("=");
                if (parts.length == 2) {
                    if (parts[0].equals("first")) {
                        try {
                            first = Integer.parseInt(parts[1]);
                        } catch (NumberFormatException e) {
                            badRequest(exchange, "first nu este un numar");
                            return;
                        }
                    } else if (parts[0].equals("second")) {
                        try {
                            second = Integer.parseInt(parts[1]);
                        } catch (NumberFormatException e) {
                            badRequest(exchange, "second nu este un numar");
                            return;
                        }
                    }
                }
            }
            if (second == 0) {
                badRequest(exchange, "Nu se poate împărți la 0.");
            } else {
                int result = first / second;
                ok(exchange, String.valueOf(result));
            }
        });



        server.start();
    }

    private static void badRequest(HttpExchange exchange, String message) throws IOException {
        sendResponse(exchange, 400, message);
    }

    private static void ok(HttpExchange exchange, String message) throws IOException {
        sendResponse(exchange, 200, message);
    }

    private static void sendResponse(HttpExchange exchange, int statusCode, String responseText) throws IOException {
        exchange.sendResponseHeaders(statusCode, responseText.length());
        exchange.getResponseBody().write(responseText.getBytes());
        exchange.getResponseBody().close();
    }
}
