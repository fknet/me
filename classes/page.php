<?php
namespace net\fabianklose\www;

class Page
{
	public $title;
	public $robots;
	public $description;
	public $keywords;

	public function __construct($title, $keywords, $description, $robots = 'index,follow')
	{
		$this->title = $title;
		$this->keywords = $keywords;
		$this->description = $description;
		$this->robots = $robots;

	}
}