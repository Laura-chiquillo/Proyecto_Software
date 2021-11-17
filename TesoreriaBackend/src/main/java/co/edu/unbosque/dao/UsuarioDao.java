package co.edu.unbosque.dao;

import java.util.List;

import co.edu.unbosque.model.User;

public interface UsuarioDao {

	List<User> getUsuarios();

	void eliminar(Long id_emp);

	void registrar(User user);

	boolean VerificarCredenciales(User user);
	
	User getUser(String correo);

	void actualizar(User user);

	
}
