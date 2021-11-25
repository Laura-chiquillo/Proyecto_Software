package co.edu.unbosque.dao;

import java.util.List;

import co.edu.unbosque.model.Concepto;

public interface ConceptoDao {
	
	List<Concepto> getConceptoIngreso();
	
	List<Concepto> getConceptoGasto();

}
