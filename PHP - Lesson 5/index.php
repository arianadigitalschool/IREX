<!DOCTYPE html>
<style>
    table{
        width:70%;
        border-collapse:collapse;
    }
    th,td{
        padding:30px;
        text-align:left;
        border: 1px solid;
    }
    th{
        background-color:lightblue;
        font-weight:bold;
    }
</style>
<table border = "1">
<tr>
    <th>Brand</th>
    <th>Origin</th>
    <th>Year<th>
</tr>
</html>
<?php

$cars = array(
    array("BMW", "Germany", 2020),
    array("Mercedes", "France", 2017),
    array("Audi", "Italy", 2024)
);

// echo $cars[0][0]. " - " . $cars[0][1]. ", " . $cars[0][2]. "<br>";
// echo $cars[1][0]. " - " . $cars[1][1]. ", " . $cars[1][2]. "<br>";
// echo $cars[2][0]. " - " . $cars[2][1]. ", " . $cars[2][2]. "<br>";

for($row = 0; $row <3; $row++){
    echo "<tr>";
for($col = 0; $col < 3; $col++){
    echo "<td>" . $cars[$row][$col] . "</td>";
} 
echo "</tr>";
} 

echo "</table>";
?>