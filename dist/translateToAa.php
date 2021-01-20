<?php 

$normalText = $_POST["text"];
$normalText = preg_replace("/\s/", "    ", $normalText);
$normalText = preg_replace("/a/", "aA ",$normalText);

$normalText = preg_replace("/b/i", "Aaaa ",$normalText);
$normalText = preg_replace("/c/i", "AaAa ",$normalText);
$normalText = preg_replace("/f/i", "aaAa ",$normalText);
$normalText = preg_replace("/h/i", "aaaa ",$normalText);
$normalText = preg_replace("/j/i", "aAAA ",$normalText);
$normalText = preg_replace("/l/i", "aAaa ",$normalText);
$normalText = preg_replace("/p/i", "aAAa ",$normalText);
$normalText = preg_replace("/q/i", "AAaA ",$normalText);
$normalText = preg_replace("/v/i", "aaaA ",$normalText);
$normalText = preg_replace("/x/i", "AaaA ",$normalText);
$normalText = preg_replace("/y/i", "AaAA ",$normalText);
$normalText = preg_replace("/z/i", "AAaa ",$normalText);
$normalText = preg_replace("/d/i", "Aaa ",$normalText);
$normalText = preg_replace("/g/i", "AAa ",$normalText);
$normalText = preg_replace("/k/i", "AaA ",$normalText);
$normalText = preg_replace("/o/i", "AAA ",$normalText);
$normalText = preg_replace("/r/i", "aAa ",$normalText);
$normalText = preg_replace("/s/i", "aaa ",$normalText);
$normalText = preg_replace("/u/i", "aaA ",$normalText);
$normalText = preg_replace("/w/i", "aAA ",$normalText);
$normalText = preg_replace("/i/i", "aa ",$normalText);
$normalText = preg_replace("/m/i", "AA ",$normalText);
$normalText = preg_replace("/n/i", "Aa ",$normalText);
$normalText = preg_replace("/t/i", "A " ,$normalText);
$normalText = preg_replace("/e/i", "a ",$normalText);
$normalText = preg_replace("/\./", "aAaAaA", $normalText);
$normalText = preg_replace("/\s\./", ".",$normalText);

// $normalText = preg_replace("/\s\s/", " ", $normalText);

echo $normalText; 
