<?php

try{
$bdd = new PDO('mysql:host=localhost;dbname=basecris;charset=utf8', 'root', '');//changer nom da base et host
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$nom=$_REQUEST['mail'];
$pwd=$_REQUEST['message'];
//creer function php de insert de valeur
$reponse = $bdd->query('SELECT COUNT(mail) as c FROM user WHERE mail=\'' . $nom . '\' AND password=\'' . $pwd .'\'');
while($data=$reponse->fetch())
	{
		echo $data['c'];
	}
$reponse->closeCursor();

?>