<?php

$apiToken = 'spacextest';

$spaceXApiUrl = 'https://api.spacexdata.com/v4/rockets';

// Check if the request method is GET.
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/rockets') {
    // Check if an "Authorization" header is present and matches the token.
    if (isset($_SERVER['HTTP_AUTHORIZATION']) && $_SERVER['HTTP_AUTHORIZATION'] === 'Bearer ' . $apiToken) {
        // Initialize cURL session.
        $curl = curl_init();

        // Set cURL options.
        curl_setopt($curl, CURLOPT_URL, $spaceXApiUrl);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

        // Execute the cURL request.
        $response = curl_exec($curl);

        // Close cURL session.
        curl_close($curl);

        if ($response) {
            // Set the response content type to JSON.
            header('Content-Type: application/json');

            // Return the SpaceX API response as a JSON response.
            echo $response;
        } else {
            // Error occurred during the cURL request.
            http_response_code(500); // Internal Server Error
            echo json_encode(['error' => 'Failed to fetch data from SpaceX API']);
        }
    } else {
        // Unauthorized access.
        http_response_code(401); // Unauthorized
        echo json_encode(['error' => 'Unauthorized']);
    }
} else {
    
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
}
