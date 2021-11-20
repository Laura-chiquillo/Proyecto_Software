package co.edu.unbosque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.model.UsuarioDao;
import co.edu.unbosque.model.User;

@RestController
@RequestMapping("/api/v1")
@ComponentScan(basePackageClasses = {UsuarioDao.class})
@CrossOrigin(origins = {"https://localhost:4200", "http://localhost:4200"})
public class UserController {
	
	@Autowired
	private UsuarioDao usuarioDao;
	
	@RequestMapping(value= "api/users", method = RequestMethod.GET)
	public List<User> getUsers(){
		return usuarioDao.getUsuarios();  
	}
	
	@RequestMapping(value= "api/users/{id_emp}", method = RequestMethod.POST)
	public void registrarUsuario(@RequestBody User user){
		usuarioDao.registrar(user);  
	}
	
	@RequestMapping(value= "api/users/{id_emp}", method = RequestMethod.DELETE)
	public void eliminar(@PathVariable Long id_emp) {
		usuarioDao.eliminar(id_emp);
	}
	
	/** Autentication login */
	@RequestMapping(value= "api/login", method = RequestMethod.POST)
	public ResponseEntity<User> login(@RequestBody User user){
		if (usuarioDao.VerificarCredenciales(user)) {
			return ResponseEntity.ok().body(usuarioDao.getUser(user.getCorreo_emp()));
		}
		return ResponseEntity.status(401).body(user) ;
	}
	
	@RequestMapping(value= "api/users/{id_emp}", method = RequestMethod.PUT)
	public void actualizar(@RequestBody User user) {
		usuarioDao.actualizar(user);
	}
}
