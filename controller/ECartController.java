package com.ECart1.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import com.ECart1.entity.Laptops;
import com.ECart1.service.Ecart1service;
import com.ECart1.entity.Mobiles;
import com.ECart1.entity.Watch;
@CrossOrigin()
@RestController

public class ECartController {
	@Autowired
	private Ecart1service service;
	@GetMapping("/Laptops")
	public List<Laptops> getLaptops(){
		return service.getAllLaptops();
	}
	@GetMapping("/mobiles")
	public List<Mobiles> getMobiles(){
		return service.getAllMobiles();
	}
	@GetMapping("/watch")
	public List<Watch> getWatch(){
		return service.getAllWatches();
	}
}

