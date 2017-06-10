<?php

namespace App\GuestbookBundle\Repository;

/**
 * AchiveRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class AchiveRepository extends \Doctrine\ORM\EntityRepository
{
	public function get_achives() {
		$dql = "SELECT a.id, u.username, up.image, a.description FROM AppGuestbookBundle:Achive a
		INNER JOIN AppUserBundle:User u
		WHERE u.id = a.user
		INNER JOIN AppAdminBundle:Upload up
		WHERE up.id = a.image
		WHERE a.status = 1
		ORDER BY a.id DESC";

		$query = $this->getEntityManager()->createQuery($dql);
		$result = $query->execute();

		return $result;
	}

	public function achives_for_guestbook(){
		$dql = "SELECT a.user, u.image, a.description
		FROM AppGuestbookBundle:Achive a
		INNER JOIN AppAdminBundle:Upload u
		WHERE a.image = u.id
		WHERE a.status = 1";

		$query = $this->getEntityManager()->createQuery($dql);

		$result = $query->execute();

		$achives = [];
		for($i=0;$i<count($result);$i++){
			$user = $result[$i]['user'];
			$image = $result[$i]['image'];
			$description = $result[$i]['description'];
			$achives[$user][] = [$image, $description];
		}

		return $achives;
	}	
}
