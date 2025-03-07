package com.ECart1.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ECart1.entity.*;
@Repository
public interface WatchRepo extends JpaRepository<Watch, Integer> {

}
