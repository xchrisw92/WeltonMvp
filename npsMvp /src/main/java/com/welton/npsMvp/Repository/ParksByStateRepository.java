package com.welton.npsMvp.Repository;

import com.welton.npsMvp.Module.User;
import org.springframework.data.repository.CrudRepository;

public interface NpsRepository extends CrudRepository<User, Long> {
}
