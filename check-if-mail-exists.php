<?php
if(isset($_GET['email']) && $_GET['email'] === 'moi@fruit.fr') {
    $reponse = json_encode('pas glop');
    exit($reponse);
}
$reponse = json_encode('glop');
exit($reponse);

