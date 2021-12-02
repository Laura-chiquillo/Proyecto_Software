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
public class ConciliacionDaoImp implements ConciliacionDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Conciliacion> getList() {

		return entityManager.createQuery("FROM Conciliacion ORDER BY CAST(id_conciliacion AS int)").getResultList();

	}
}
