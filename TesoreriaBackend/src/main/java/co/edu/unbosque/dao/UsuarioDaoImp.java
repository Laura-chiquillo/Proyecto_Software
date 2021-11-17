package co.edu.unbosque.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.hibernate.EntityNameResolver;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import co.edu.unbosque.model.User;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class UsuarioDaoImp implements UsuarioDao{
	
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<User> getUsuarios() {
		String query = "From User";		
		return entityManager.createQuery(query).getResultList();
	}

	@Override
	public void eliminar(Long id_emp) {
		User user = entityManager.find(User.class, id_emp);
		entityManager.remove(user);
	}

	@Override
	public void registrar(User user) {
		entityManager.merge(user);		
	}
	

	
	

	@Override
	public boolean VerificarCredenciales(User user) {
		String query = "FROM User e  WHERE e.correo_emp = :correo_emp AND e.contrasena_emp= :contrasena_emp";		
		List<User> lista = entityManager.createQuery(query,User.class)
				.setParameter("correo_emp", user.getCorreo_emp())
				.setParameter("contrasena_emp", user.getContrasena_emp())
				.getResultList();	
		
		return !lista.isEmpty();
	}
	
	@Override
	public User getUser(String correo) {
		String query = "FROM User e WHERE e.correo_emp = :correo_emp";
		return entityManager.createQuery(query, User.class).setParameter("correo_emp",correo).getResultList().get(0);
	}

	
	@Transactional
	public void actualizar(User user) {

		Long id = user.getId_emp();

		entityManager.createQuery("UPDATE User e SET e.estado_emp=true WHERE e.id_emp='" + String.valueOf(id) + "'")
				.executeUpdate();

	}


}
