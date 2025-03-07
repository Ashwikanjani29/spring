package com.ECart1.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ECart1.entity.Laptops;
import com.ECart1.repo.ECartRepo;
import com.ECart1.entity.Mobiles;
import com.ECart1.repo.MobileRepo;
import com.ECart1.entity.Watch;
import com.ECart1.repo.WatchRepo;
@Service 
public class Ecart1service {
	@Autowired
	private ECartRepo repo;
	@Autowired
	private MobileRepo repo1;
	@Autowired
	private WatchRepo repo2;
	
	public List<Laptops>getAllLaptops(){
		return repo.findAll();
	}
	public List<Mobiles>getAllMobiles(){
		return repo1.findAll();
	}
	public List<Watch>getAllWatches(){
		return repo2.findAll();
	}
	
}
