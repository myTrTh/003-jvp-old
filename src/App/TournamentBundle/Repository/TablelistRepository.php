<?php

namespace App\TournamentBundle\Repository;
use Doctrine\ORM\EntityManager;

/**
 * TablelistRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class TablelistRepository extends \Doctrine\ORM\EntityRepository
{
	public function show_table($tr, $tour, $group) {
		$dql = "SELECT t.user, u.username, u.image, sum(t.game) as game, sum(t.w) as w, sum(t.n) as n, sum(t.l) as l, sum(t.bw) as bw, sum(t.bl) as bl, sum(t.score) as score FROM AppTournamentBundle:Tablelist t
			INNER JOIN AppUserBundle:User u
			WHERE u.id = t.user
			WHERE t.tr = :tr AND t.tour <= :tour AND t.groups = :group
			GROUP BY t.user
			ORDER BY score DESC, bw DESC, bl DESC, u.username ASC";

		$query = $this->getEntityManager()->createQuery($dql)
					  ->SetParameter("tr", $tr)
					  ->SetParameter("tour", $tour)
					  ->SetParameter("group", $group);

		$result = $query->execute();

		for($i=0;$i<count($result);$i++) {
			if($result[$i]['image'] != '') {
				$info = getimagesize("public/images/users/".$result[$i]['image']);
				if($info[1] >= $info[0])
					$result[$i]['resize'] = 0;
				else
					$result[$i]['resize'] = 1;
			} else {
				$result[$i]['resize'] = 0;
			}
		}  		

		return $result;
	}

	public function show_strickers($tr, $tour) {
		$dql = "SELECT t.user, u.username, u.image, sum(t.bw) as bw 
				FROM AppTournamentBundle:Tablelist t
				INNER JOIN AppUserBundle:User u
				WHERE u.id = t.user
				WHERE t.tr = :tr AND t.tour <= :tour
				GROUP BY t.user
				ORDER BY bw DESC, u.username ASC";

		$query = $this->getEntityManager()->createQuery($dql)
					  ->SetParameter("tr", $tr)
					  ->SetParameter("tour", $tour);

		$result = $query->execute();

		for($i=0;$i<count($result);$i++) {
			if($result[$i]['image'] != '') {
				$info = getimagesize("public/images/users/".$result[$i]['image']);
				if($info[1] >= $info[0])
					$result[$i]['resize'] = 0;
				else
					$result[$i]['resize'] = 1;
			} else {
				$result[$i]['resize'] = 0;
			}
		}  		

		return $result;
	}

	public function get_tour_status($tr, $tour) {
		$dql = "SELECT t.game FROM AppTournamentBundle:Tablelist t
				WHERE t.tr = :tr AND t.tour = :tour";

		$query = $this->getEntityManager()->createQuery($dql)
					  ->SetParameter("tr", $tr)
					  ->SetParameter("tour", $tour)
					  ->SetMaxResults(1);

		$result = $query->execute();


		if(empty($result)) {
			$status = 0;
		} else {
			if($result[0]['game'] == 0) {
				$status = 1;
			} else {
				$status = 2;
			}
		}

		return $status;

	}

	public function get_actual_tour($tr) {

		$dql = "SELECT max(t.tour) as maxtour FROM AppTournamentBundle:Tablelist t
				WHERE t.tr = :tr";

		$query = $this->getEntityManager()->createQuery($dql)
					  ->SetParameter("tr", $tr);

		$result = $query->execute();

		if(empty($result))
			$maxtour = 1;
		else
			$maxtour = $result[0]['maxtour'];

		return $maxtour;

	}


	public function get_last_tour() {
		$upd = $this->get_updated();

		$dql = "SELECT t.tr, t.tour FROM AppTournamentBundle:Tablelist t
				WHERE t.updated = :updated";

		$query = $this->getEntityManager()->createQuery($dql)
					  ->SetParameter('updated', $upd)
					  ->SetMaxResults(1);

		$result = $query->execute();

		$param = array('tr' => $result[0]['tr'], 'tour' => $result[0]['tour']);

        $sql = "SELECT tl.user, u.username, u.image, sum(tl.howgame) as howgame, sum(tl.game) as game, sum(tl.bw) as bw, (sum(tl.bw)/sum(tl.howgame)) as bwhg, sum(tl.score) as score, (sum(tl.score)/sum(tl.game))*2 as scorehg, count(tl.off)*5 as off,
        	((((sum(tl.bw)/sum(tl.howgame)) + (sum(tl.score)/sum(tl.game))*2)*100)+(count(tl.off)*5)) as points
         		FROM tablelist as tl
         		INNER JOIN users as u
         		ON u.id = tl.user
         		INNER JOIN tournaments as t
         		ON tl.tr = t.id
         		WHERE t.types = 1 AND (t.status = 1 OR t.status = 2) AND tl.game > 0
         			AND (t.created > NOW() - INTERVAL 24 MONTH) AND NOT (tl.tr = :tr AND tl.tour = :tour)
         		GROUP BY tl.user
         		ORDER BY points DESC, scorehg DESC, bwhg DESC, score DESC, bw DESC";         		

        $em = $this->getEntityManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute($param);
        $pre = $stmt->fetchAll();

        $pres = [];
        for($i=0;$i<count($pre);$i++) {
        	$user = $pre[$i]['user'];
        	$point = $pre[$i]['points'];

        	$pres[$user] = $point;
        }

        return $pres;
	}

	public function get_ranking() {

        $sql = "SELECT tl.user, u.username, u.image, sum(tl.howgame) as howgame, sum(tl.game) as game, sum(tl.bw) as bw, (sum(tl.bw)/sum(tl.howgame)) as bwhg, sum(tl.score) as score, (sum(tl.score)/sum(tl.game))*2 as scorehg, count(tl.off)*5 as off,
        	((((sum(tl.bw)/sum(tl.howgame)) + (sum(tl.score)/sum(tl.game))*2)*100)+(count(tl.off)*5)) as points
         		FROM tablelist as tl
         		INNER JOIN users as u
         		ON u.id = tl.user
         		INNER JOIN tournaments as t
         		ON tl.tr = t.id
         		WHERE t.types = 1 AND (t.status = 1 OR t.status = 2) 
         			AND (t.created > NOW() - INTERVAL 24 MONTH) AND tl.game > 0
         		GROUP BY tl.user
         		ORDER BY points DESC, scorehg DESC, bwhg DESC, score DESC, bw DESC";

        $em = $this->getEntityManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

		for($i=0;$i<count($result);$i++) {
			if($result[$i]['image'] != '') {
				$info = getimagesize("public/images/users/".$result[$i]['image']);
				if($info[1] >= $info[0])
					$result[$i]['resize'] = 0;
				else
					$result[$i]['resize'] = 1;
			} else {
				$result[$i]['resize'] = 0;
			}
		}        

		return $result;
	}

	// ranking updated
	public function get_updated() {
		$dql = "SELECT max(t.updated) FROM AppTournamentBundle:Tablelist t";

		$query = $this->getEntityManager()->createQuery($dql)
					  ->SetMaxResults(1);

		$result = $query->execute();

		if($result)
			return $result[0][1];
		else
			return 0;
	}

	public function set_how_games($tournament, $tour, $howgame) {
        $em = $this->getEntityManager();
        $params = array('howgame' => $howgame, 'tour' => $tour, 'tr' => $tournament);

        $sql = "UPDATE tablelist SET howgame = :howgame WHERE tr = :tr AND tour = :tour";
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute($params);
	}

	public function get_graph($tr, $uniq) {
		$dql = "SELECT max(t.tour) as maxtour FROM AppTournamentBundle:Tablelist t
				WHERE t.tr = :tr AND t.game = 1";

		$query = $this->getEntityManager()->createQuery($dql)
					  ->SetParameter('tr', $tr);

		$result = $query->execute();

		if(empty($result)) {
			return 0;
		} else {
			$max = $result[0]['maxtour'];
		}

		$all = [];
		for($i=1;$i<=$max;$i++) {
			$dql = "SELECT t.user, u.username, sum(t.score) as sc, sum(t.bw) as bw
					FROM AppTournamentBundle:Tablelist t
					INNER JOIN AppUserBundle:User u
					WHERE u.id = t.user
					WHERE t.tr = :tr AND t.tour <= :tour
					GROUP BY t.user
					ORDER BY sc DESC, bw DESC";

			$query = $this->getEntityManager()->createQuery($dql)
						  ->SetParameter("tr", $tr)
						  ->SetParameter("tour", $i);

			$result = $query->execute();

			for($y=0;$y<count($result);$y++) {
				$user = $result[$y]['user'];
				$username = $result[$y]['username'];

				$pos = $y + 1;
				if(in_array($user, $uniq)) {
					$all[$user]['name'] = $username;
					$all[$user]['data'][] = $pos;
				}
			}
		}

		$data = [];
		foreach ($all as $us => $pos) {
			$data[] = $pos;
		}

		$tours = count($data[0]['data']);
		$users = count($result);

		$options['series'] = $data;
		$options['tours'] = $tours;
		$options['users'] = $users;

		return $options;
	}	

}