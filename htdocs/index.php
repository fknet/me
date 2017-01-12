<?php

namespace net\fabianklose\www;

require_once '../classes/page.php';

$page = new Page('Fabian Klose', 'fabian,klose,developer,web,application,fknet', 'Fabian Klose, Web Application Developer.');

include('../templates/header.php');
include('../templates/footer.php');