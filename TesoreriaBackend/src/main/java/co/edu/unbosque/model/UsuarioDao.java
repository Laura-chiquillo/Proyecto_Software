package co.edu.unbosque.model;

import java.util.List;

public interface UsuarioDao {

	List<User> getUsuarios();

	void eliminar(Long id_emp);

	void registrar(User user);

	boolean VerificarCredenciales(User user);
	
	User getUser(String correo);

	void actualizar(User user);

	
}