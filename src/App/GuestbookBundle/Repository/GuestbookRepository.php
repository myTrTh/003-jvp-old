<?php

namespace App\GuestbookBundle\Repository;

/**
 * GuestbookRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class GuestbookRepository extends \Doctrine\ORM\EntityRepository {

    protected $bundle = "AppGuestbookBundle:Guestbook";

	public function show_guestbook($page, $posts) {
        $list = $page - 1;
        if($list > 0)
            $list = $list * $posts;

        $dql = 'SELECT g.id, g.user, g.message, g.created, g.updated, g.quote, u.username, u.image, g.quote, g.status
            FROM '.$this->bundle.' g 
            INNER JOIN AppUserBundle:User u
            WHERE u.id = g.user
            ORDER BY g.id DESC';

        $query = $this->getEntityManager()->createQuery($dql)
                ->SetFirstResult($list)
                ->SetMaxResults($posts);

        $pagedql = 'SELECT count(g) FROM '.$this->bundle.' g';
        $pagequery = $this->getEntityManager()->createQuery($pagedql);

        $result = $query->execute();
        $rowcountpage = $pagequery->execute();
        $countpage = ceil($rowcountpage[0][1]/$posts);
        return array($result, $countpage);
	}

    public function show_user_message($id, $page, $posts) {
        $list = $page - 1;
        if($list > 0)
            $list = $list * $posts;

        $dql = 'SELECT g.id, g.user, g.message, g.created, g.updated, g.quote, u.username, u.image, g.quote, g.status
            FROM '.$this->bundle.' g
            INNER JOIN AppUserBundle:User u
            WHERE u.id = g.user
            WHERE g.user = :id
            ORDER BY g.id DESC';

        $query = $this->getEntityManager()->createQuery($dql)
                ->SetParameter("id", $id)
                ->SetFirstResult($list)
                ->SetMaxResults($posts);

        $pagedql = 'SELECT count(g) FROM '.$this->bundle.' g
        WHERE g.user = :id';
        $pagequery = $this->getEntityManager()->createQuery($pagedql)
                ->SetParameter("id", $id);

        $result = $query->execute();
        $rowcountpage = $pagequery->execute();
        $countpage = ceil($rowcountpage[0][1]/$posts);
        return array($result, $countpage);
    }    

    public function count_message()
    {
        $count = 'SELECT g.user, count(g.user) FROM '.$this->bundle.' g
        WHERE g.status = 1
        GROUP BY g.user
        ';
        $pagequery = $this->getEntityManager()->createQuery($count);

        $count_message = $pagequery->execute();
        
        $users = [];
        $summ = 0;
        for($i=0;$i<count($count_message);$i++)
        {
            $user = $count_message[$i]['user'];
            $users[$user] = $count_message[$i][1];
            $summ += $count_message[$i][1];
        }

        $result = ['users' => $users, 'summ' => $summ];

        return $result;
    }

    public function last_message($userId, $message) {
        $dql = 'SELECT g.user, g.message
                FROM '.$this->bundle.' g
                ORDER BY g.id DESC';

        $query = $this->getEntityManager()->createQuery($dql)
                        ->SetMaxResults(1);

        $result = $query->getResult();

        if(!empty($result) and $result[0]['user'] == $userId and $result[0]['message'] == $message)
            return 1;
        else
            return 0;
    }

    public function get_old_quote($quote_id)
    {
        $quotes = [];
        for($i=0;$i<count($quote_id);$i++)
        {
            $quote = $quote_id[$i]['quote'];
            $post = $quote_id[$i]['id'];
            if($quote != null)
            {
                $dql = 'SELECT g.message, u.username, g.created
                    FROM '.$this->bundle.' g
                    INNER JOIN AppUserBundle:User u
                    WHERE u.id = g.user
                    WHERE g.id = :id';

                $query = $this->getEntityManager()->createQuery($dql)
                ->setParameter('id', $quote);
                $result = $query->execute();

                $quotes[$post]['message'] = $result[0]['message'];
                $quotes[$post]['user'] = $result[0]['username'];
                $quotes[$post]['created'] = $result[0]['created'];
            }
        }

        return $quotes;
    }

    public function how_messages($id_user) {
        $dql = 'SELECT count(g) FROM '.$this->bundle.' g
        WHERE g.user = :id';
        $page = $this->getEntityManager()->createQuery($dql)
                ->SetParameter("id", $id_user);

        $result = $page->execute();
        return $result[0][1];
    }

    public function get_info_for_edit($id) {

        $dql = 'SELECT g.user, g.created, g.status FROM '.$this->bundle.' g
                WHERE g.id = :id';

        $query = $this->getEntityManager()->createQuery($dql)
                        ->SetParameter("id", $id);

        $result = $query->execute();
        return $result;
    }

    public function get_page($post, $posts) {

        $dql = 'SELECT max(g.id) FROM '.$this->bundle.' g';
        $query = $this->getEntityManager()->createQuery($dql);
        $result = $query->execute();
        if(!empty($result))
            $allposts = $result[0][1];
        else
            $allposts = 0;

        $pages = ceil($allposts/$posts);
        $minus = $allposts - $post;
        $page = floor($minus/$posts) + 1;
        return $page;
    }

}
