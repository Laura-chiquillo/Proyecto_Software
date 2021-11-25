package co.edu.unbosque.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

import co.edu.unbosque.model.CuentaBancaria;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class CuentaDaoImp implements CuentaDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<CuentaBancaria> getCuenta() {

		return entityManager.createQuery("FROM CuentaBancaria").getResultList();

	}
	
}
