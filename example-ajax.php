<?php

// Basic example of PHP script to handle with jQuery-Tabledit plug-in.
// Note that is just an example. Should take precautions such as filtering the input data.
header('Content-Type: application/json');
$input = filter_input_array(INPUT_POST);

// Use one of these to see what happens in tables and feedbackContainer
$input['message'] = 'error';
$input['message'] = 'confirmation';
// Use this if you want exception
$input['message'] = 'sqhgdlsqkdjm';
echo json_encode($input);
