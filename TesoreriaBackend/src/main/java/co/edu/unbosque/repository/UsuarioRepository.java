package co.edu.unbosque.repository;
import co.edu.unbosque.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<User,Long> {
      
}
