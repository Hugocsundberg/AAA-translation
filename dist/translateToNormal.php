<?php 

$normalText = " ".$_POST["text"];
$normalText = preg_replace("/aAaAaA/", ".", $normalText);
$normalText = preg_replace("/(?<=\s)\/(?=\s)/", " ",$normalText);
$normalText = preg_replace("/(?<!(A|a))Aaaa(?!(A|a))/", "b",$normalText);
$normalText = preg_replace("/(?<!(A|a))AaAa(?!(A|a))/", "c",$normalText);
$normalText = preg_replace("/(?<!(A|a))aaAa(?!(A|a))/", "f",$normalText);
$normalText = preg_replace("/(?<!(A|a))aaaa(?!(A|a))/", "h",$normalText);
$normalText = preg_replace("/(?<!(A|a))aAAA(?!(A|a))/", "j",$normalText);
$normalText = preg_replace("/(?<!(A|a))aAaa(?!(A|a))/", "l",$normalText);
$normalText = preg_replace("/(?<!(A|a))aAAa(?!(A|a))/", "p",$normalText);
$normalText = preg_replace("/(?<!(A|a))AAaA(?!(A|a))/", "q",$normalText);
$normalText = preg_replace("/(?<!(A|a))aaaA(?!(A|a))/", "v",$normalText);
$normalText = preg_replace("/(?<!(A|a))AaaA(?!(A|a))/", "x",$normalText);
$normalText = preg_replace("/(?<!(A|a))AaAA(?!(A|a))/", "y",$normalText);
$normalText = preg_replace("/(?<!(A|a))AAaa(?!(A|a))/", "z",$normalText);
$normalText = preg_replace("/(?<!(A|a))Aaa(?!(A|a))/", "d",$normalText);
$normalText = preg_replace("/(?<!(A|a))AAa(?!(A|a))/", "g",$normalText);
$normalText = preg_replace("/(?<!(A|a))AaA(?!(A|a))/", "k",$normalText);
$normalText = preg_replace("/(?<!(A|a))AAA(?!(A|a))/", "o",$normalText);
$normalText = preg_replace("/(?<!(A|a))aAa(?!(A|a))/", "r",$normalText);
$normalText = preg_replace("/(?<!(A|a))aaa(?!(A|a))/", "s",$normalText);
$normalText = preg_replace("/(?<!(A|a))aaA(?!(A|a))/", "u",$normalText);
$normalText = preg_replace("/(?<!(A|a))aAA(?!(A|a))/", "w",$normalText);
$normalText = preg_replace("/(?<!(A|a))aa(?!(A|a))/", "i",$normalText);
$normalText = preg_replace("/(?<!(A|a))AA(?!(A|a))/", "m",$normalText);
$normalText = preg_replace("/(?<!(A|a))Aa(?!(A|a))/", "n",$normalText);
$normalText = preg_replace("/(?<!(A|a))A(?!(A|a))/", "t",$normalText);
$normalText = preg_replace("/(?<!(A|a))a(?!(A|a))/", "e",$normalText);
$normalText = preg_replace("/(?<!(A|a))aA(?!(A|a))/", "a",$normalText);
$normalText = preg_replace("/(?<!\s)\s(?!\s)/", "", $normalText);
$normalText = preg_replace("/\s\s\s\s/", " ", $normalText);
$normalText = preg_replace("/\s\s/", " ", $normalText);

echo $normalText; 
