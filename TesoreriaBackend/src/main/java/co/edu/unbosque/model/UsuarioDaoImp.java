package co.edu.unbosque.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class UsuarioDaoImp implements UsuarioDao {

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
	public boolean VerificarCredenciales(User user) {
		String query = "FROM User e  WHERE e.correo_emp = :correo_emp AND e.contrasena_emp= :contrasena_emp";
		List<User> lista = entityManager.createQuery(query, User.class).setParameter("correo_emp", user.getCorreo_emp())
				.setParameter("contrasena_emp", user.getContrasena_emp()).getResultList();

		return !lista.isEmpty();
	}

	@Override
	public User getUser(String correo) {
		String query = "FROM User e WHERE e.correo_emp = :correo_emp";
		return entityManager.createQuery(query, User.class).setParameter("correo_emp", correo).getResultList().get(0);
	}

	@Transactional
	public void actualizar(User user) {

		Long id = user.getId_emp();

		entityManager.createQuery("UPDATE User e SET e.estado_emp=true WHERE e.id_emp='" + String.valueOf(id) + "'")
				.executeUpdate();

	}

	@Transactional
	public void bloquear(User user) {

		Long id = this.getUser(user.getCorreo_emp()).getId_emp();

	}

	@Override
	public void registrar(User user) {
		
		String query = "INSERT INTO empleado (id_emp,nombres_emp,apellidos_emp,num_id_empl,correo_emp,sexo_emp,telefono_emp,id_nivel,id_fun,estado_emp,contrasena_emp,tipo_documento_emp) "
									  + "VALUES (:id_emp,:nombres_emp,:apellidos_emp,:num_id_empl,:correo_emp,:sexo_emp,:telefono_emp,:id_nivel,:id_fun,:estado_emp,:contrasena_emp,:tipo_documento_emp)";
		entityManager.createNativeQuery(query)
		.setParameter("id_emp",user.getId_emp())
		.setParameter("nombres_emp",user.getNombres_emp())
		.setParameter("apellidos_emp",user.getApellidos_emp())
		.setParameter("num_id_empl", user.getNum_id_empl() )
		.setParameter("correo_emp",user.getCorreo_emp())
		.setParameter("sexo_emp",user.getSexo_emp())
		.setParameter("telefono_emp",Integer.parseInt(user.getTelefono_emp()))
		.setParameter("id_nivel",user.getId_nivel())
		.setParameter("id_fun",user.getId_fun())
		.setParameter("estado_emp",Boolean.valueOf(user.isEstado_emp()))
		.setParameter("contrasena_emp",user.getContrasena_emp())
		.setParameter("tipo_documento_emp",user.getTipo_documento_emp())
		.executeUpdate();
	}
}
