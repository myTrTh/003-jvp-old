<?php

namespace App\TournamentBundle\Repository;

/**
 * ForescoredRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ForescoredRepository extends \Doctrine\ORM\EntityRepository
{
	public function get_forescored($tr, $tour) {
		$dql = "SELECT f.player, p.first, p.second, p.image, p.position
				FROM AppTournamentBundle:Forescored f
				INNER JOIN AppTournamentBundle:Player p
				WHERE f.player = p.id
				WHERE f.tr = :tr AND f.tour = :tour
				ORDER BY p.position ASC, p.second ASC";

		$query = $this->getEntityManager()->createQuery($dql)
					  ->SetParameter('tr', $tr)
					  ->SetParameter('tour', $tour);

		$result = $query->execute();

		// $results = [];
		// for($i=0;$i<count($result);$i++) {
		// 	$pl = $result[$i]['player'];
		// 	$fir = $result[$i]['first'];
		// 	$sec = $result[$i]['second'];
		// 	$img = $result[$i]['image'];
		// 	$pos = $result[$i]['position'];

		// 	$results[$pl] = ["first" => $fir, "second" => $sec, "image" => $img, "position" => $pos];
		// }

		return $result;
	}

}
