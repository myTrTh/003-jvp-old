<?php

namespace App\TournamentBundle\Repository;

/**
 * ForebridgeRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ForebridgeRepository extends \Doctrine\ORM\EntityRepository
{
	public function getForeBridge($tournament, $tour) {
		$dql = "SELECT f.hash FROM AppTournamentBundle:Forebridge f WHERE f.tr = :tr AND f.tour = :tour";

		$query = $this->getEntityManager()->createQuery($dql)
			->SetParameter('tr', $tournament)
			->SetParameter('tour', $tour);

		$result = $query->execute();

		if(empty($result))
			$result = 0;
		else
			$result = $result[0]['hash'];

		return $result;
	}

	public function get_tour_status($tr, $tour) {
		$dql = "SELECT f.hash FROM AppTournamentBundle:Forebridge f WHERE f.tr = :tr AND f.tour = :tour";

		$query = $this->getEntityManager()->createQuery($dql)
				->SetParameter("tr", $tr)
				->SetParameter("tour", $tour);

		$result = $query->execute();

		if(empty($result)) {
			$result = 0;
		} else {
	
			$dql = "SELECT f FROM AppTournamentBundle:Forecast f WHERE f.hash = :hash AND f.timer < CURRENT_DATE() ORDER BY f.timer DESC";

			$query = $this->getEntityManager()->createQuery($dql)
					->SetParameter("hash", $result[0]['hash'])
					->SetMaxResults(1);

			$res = $query->execute();

			if(empty($res))
				$result = 1;
			else
				$result = 2;
		}

		return $result;
	}
}
