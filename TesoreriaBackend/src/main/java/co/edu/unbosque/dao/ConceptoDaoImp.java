package co.edu.unbosque.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

import co.edu.unbosque.model.Concepto;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class ConceptoDaoImp implements ConceptoDao {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Concepto> getConcepto() {

		return entityManager.createQuery("FROM Concepto").getResultList();

	}

}
