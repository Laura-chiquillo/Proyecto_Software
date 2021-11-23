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

import co.edu.unbosque.dao.BeneficiarioDao;
import co.edu.unbosque.dao.ConceptoDao;
import co.edu.unbosque.dao.CuentaDao;
import co.edu.unbosque.dao.ImpuestoDao;
import co.edu.unbosque.dao.MetodoPagoDao;
import co.edu.unbosque.dao.RetencionDao;
import co.edu.unbosque.dao.UsuarioDao;
import co.edu.unbosque.model.Beneficiario;
import co.edu.unbosque.model.Concepto;
import co.edu.unbosque.model.CuentaBancaria;
import co.edu.unbosque.model.Impuesto;
import co.edu.unbosque.model.MetodoPago;
import co.edu.unbosque.model.Retencion;
import co.edu.unbosque.model.User;

@RestController
@RequestMapping("/api/v1")
@ComponentScan(basePackageClasses = { UsuarioDao.class })
@CrossOrigin(origins = { "https://localhost:4200", "http://localhost:4200" })
public class UserController {

	@Autowired
	private UsuarioDao usuarioDao;

	@Autowired
	private ImpuestoDao impuestoDao;

	@Autowired
	private BeneficiarioDao beneficiarioDao;

	@Autowired
	private ConceptoDao conceptoDao;

	@Autowired
	private MetodoPagoDao metodoPagoDao;

	@Autowired
	private RetencionDao retencionDao;

	@Autowired
	private CuentaDao cuentaDao;

	@RequestMapping(value = "api/users", method = RequestMethod.GET)
	public List<User> getUsers() {
		return usuarioDao.getUsuarios();
	}

	@RequestMapping(value = "api/users/{id_emp}", method = RequestMethod.POST)
	public void registrarUsuario(@RequestBody User user) {
		usuarioDao.registrar(user);
	}

	@RequestMapping(value = "api/users/{id_emp}", method = RequestMethod.DELETE)
	public void eliminar(@PathVariable Long id_emp) {
		usuarioDao.eliminar(id_emp);
	}

	/** Autentication login */
	@RequestMapping(value = "api/login", method = RequestMethod.POST)
	public ResponseEntity<User> login(@RequestBody User user) {
		if (usuarioDao.VerificarCredenciales(user)) {
			return ResponseEntity.ok().body(usuarioDao.getUser(user.getCorreo_emp()));
		}
		return ResponseEntity.status(401).body(user);
	}

	@RequestMapping(value = "api/users/{id_emp}", method = RequestMethod.PUT)
	public void actualizar(@RequestBody User user) {
		usuarioDao.actualizar(user);
	}

	@RequestMapping(value = "api/impuesto", method = RequestMethod.GET)
	public List<Impuesto> getImpuesto() {
		return impuestoDao.getImpuesto();
	}

	@RequestMapping(value = "api/beneficiario", method = RequestMethod.GET)
	public List<Beneficiario> getBeneficiario() {
		return beneficiarioDao.getBeneficiaro();
	}

	@RequestMapping(value = "api/concepto", method = RequestMethod.GET)
	public List<Concepto> getConcepto() {
		return conceptoDao.getConcepto();
	}

	@RequestMapping(value = "api/pago", method = RequestMethod.GET)
	public List<MetodoPago> getMetodoPago() {
		return metodoPagoDao.getMetodoPago();
	}

	@RequestMapping(value = "api/retencion", method = RequestMethod.GET)
	public List<Retencion> getRetencion() {
		return retencionDao.getRetencion();
	}

	@RequestMapping(value = "api/cuenta", method = RequestMethod.GET)
	public List<CuentaBancaria> getCuenta() {
		return cuentaDao.getCuenta();
	}

}