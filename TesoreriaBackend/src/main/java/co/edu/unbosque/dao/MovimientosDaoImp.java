package co.edu.unbosque.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
@EntityScan(basePackages = "co.edu.unbosque.model")
public class MovimientosDaoImp implements MovimientosDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public int numMov() {

		return Integer.parseInt(entityManager
				.createQuery("SELECT id_movim FROM Movimientos ORDER BY id_movim DESC")
				.getResultList().get(0).toString()) + 1;

	}

}
