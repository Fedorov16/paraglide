<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/product", name="product")
 */

class ProductController extends AbstractController
{
    /**
     * @Route("/all", name="all")
     */
    public function index(): Response
    {
        return $this->render('product/product.html.twig', [
            'controller_name' => 'productController',
        ]);
    }
}
