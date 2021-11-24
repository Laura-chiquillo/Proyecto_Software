package co.edu.unbosque.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.model.User;
import co.edu.unbosque.service.UsuarioService;

@RestController
@RequestMapping ("/usuario/")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class UsuarioREST {
       
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	private ResponseEntity<List<User>> getAllUsuarios (){
		return ResponseEntity.ok(usuarioService.findAll());
	}
	@PostMapping
	private ResponseEntity<User> saveUsuario (@RequestBody User usuario){
		try {
			User usuarioGuardado = usuarioService.save(usuario);
			return ResponseEntity.created(new URI("/usuarios/"+usuarioGuardado.getId_emp())).body(usuarioGuardado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		
	}
	@DeleteMapping (value = "delete/{id}")
	private ResponseEntity<Boolean> deletePersona (@PathVariable ("id_emp") Long id){
		usuarioService.deleteById(id);
		return ResponseEntity.ok(!(usuarioService.findById(id)!=null));
		
	}
	
}
