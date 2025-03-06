package com.ECart1.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ECart1.entity.Mobiles;
@Repository
public interface MobileRepo extends JpaRepository<Mobiles, Integer> {

}
